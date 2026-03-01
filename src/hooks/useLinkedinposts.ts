import { useEffect, useState } from 'react';
import LinkedinPosts from '@/data/LinkedinPosts.json';
import { LinkedinPostType } from '@/types/index'; // Ensure correct path and export

export function useLinkedinPosts() {
    const [data, setData] = useState<LinkedinPostType[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        // Simulate a data fetch
        setTimeout(() => {
            setData(LinkedinPosts as unknown as LinkedinPostType[]); // Type assertion to ensure correct typing
            setLoading(false);
        }, 1000);
    }, []);

    return { LinkedinPosts: data, isLoading, error: null };
}