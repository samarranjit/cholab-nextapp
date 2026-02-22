import { useEffect, useState, useCallback } from 'react';
import PublicationsPosts from '@/data/PublicationsPosts.json';
import { PublicationItem } from '@/types/index';

const ITEMS_PER_PAGE = 6;

interface PaginatedData {
  data: PublicationItem[];
  currentPage: number;
  hasMore: boolean;
}

export function usePublicationsPosts() {
    const [allReviewData, setAllReviewData] = useState<PublicationItem[]>([]);
    const [allPublishedData, setAllPublishedData] = useState<PublicationItem[]>([]);
    
    const [reviewData, setReviewData] = useState<PaginatedData>({
        data: [],
        currentPage: 1,
        hasMore: true
    });
    
    const [publishedData, setPublishedData] = useState<PaginatedData>({
        data: [],
        currentPage: 1,
        hasMore: true
    });
    
    const [isLoading, setLoading] = useState(true);
    const [isLoadingMoreReview, setIsLoadingMoreReview] = useState(false);
    const [isLoadingMorePublished, setIsLoadingMorePublished] = useState(false);

    // Sort publications by date (newest first)
    const sortByDate = (publications: PublicationItem[]): PublicationItem[] => {
        return publications
            .filter(pub => pub.date) // Filter out items without dates
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    // Initial data load
    useEffect(() => {
        setLoading(true);
        
        // Simulate a data fetch
        setTimeout(() => {
            // Separate and sort data by status
            const reviewPublications = sortByDate(
                PublicationsPosts.filter(pub => pub.status === "Review")
            );
            const publishedPublications = sortByDate(
                PublicationsPosts.filter(pub => pub.status === "Published")
            );
            
            // Store all data
            setAllReviewData(reviewPublications);
            setAllPublishedData(publishedPublications);
            
            // Set initial paginated data (top 5 of each)
            setReviewData({
                data: reviewPublications.slice(0, ITEMS_PER_PAGE),
                currentPage: 1,
                hasMore: reviewPublications.length > ITEMS_PER_PAGE
            });
            
            setPublishedData({
                data: publishedPublications.slice(0, ITEMS_PER_PAGE),
                currentPage: 1,
                hasMore: publishedPublications.length > ITEMS_PER_PAGE
            });
            
            setLoading(false);
        }, 1000);
    }, []);

    // Load more review publications
    const loadMoreReview = useCallback(() => {
        if (isLoadingMoreReview || !reviewData.hasMore) return;
        
        setIsLoadingMoreReview(true);
        
        setTimeout(() => {
            const nextPage = reviewData.currentPage + 1;
            const endIndex = nextPage * ITEMS_PER_PAGE;
            
            const newData = allReviewData.slice(0, endIndex);
            
            setReviewData({
                data: newData,
                currentPage: nextPage,
                hasMore: endIndex < allReviewData.length
            });
            
            setIsLoadingMoreReview(false);
        }, 800);
        
    }, [allReviewData, reviewData, isLoadingMoreReview]);

    // Load more published publications
    const loadMorePublished = useCallback(() => {
        if (isLoadingMorePublished || !publishedData.hasMore) return;
        
        setIsLoadingMorePublished(true);
        
        setTimeout(() => {
            const nextPage = publishedData.currentPage + 1;
            const endIndex = nextPage * ITEMS_PER_PAGE;
            
            const newData = allPublishedData.slice(0, endIndex);
            
            setPublishedData({
                data: newData,
                currentPage: nextPage,
                hasMore: endIndex < allPublishedData.length
            });
            
            setIsLoadingMorePublished(false);
        }, 1800);
        
    }, [allPublishedData, publishedData, isLoadingMorePublished]);

    // Reset functions
    const resetReview = useCallback(() => {
        setReviewData({
            data: allReviewData.slice(0, ITEMS_PER_PAGE),
            currentPage: 1,
            hasMore: allReviewData.length > ITEMS_PER_PAGE
        });
    }, [allReviewData]);

    const resetPublished = useCallback(() => {
        setPublishedData({
            data: allPublishedData.slice(0, ITEMS_PER_PAGE),
            currentPage: 1,
            hasMore: allPublishedData.length > ITEMS_PER_PAGE
        });
    }, [allPublishedData]);

    return { 
        // Review publications
        reviewPublications: reviewData.data,
        hasMoreReview: reviewData.hasMore,
        loadMoreReview,
        resetReview,
        isLoadingMoreReview,
        reviewTotalCount: allReviewData.length,
        reviewDisplayedCount: reviewData.data.length,
        
        // Published publications
        publishedPublications: publishedData.data,
        hasMorePublished: publishedData.hasMore,
        loadMorePublished,
        resetPublished,
        isLoadingMorePublished,
        publishedTotalCount: allPublishedData.length,
        publishedDisplayedCount: publishedData.data.length,
        
        // General states
        isLoading,
        
        // Legacy support (combined data for backward compatibility)
        PublicationsPosts: [...reviewData.data, ...publishedData.data],
        error: null
    };
}