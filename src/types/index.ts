// Type definitions for the ChoLab application


export interface Member {
  _id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
  isActive: boolean;

}
export interface Award {
  desc?: string;
  link?: string;
}
export interface Activity {
  title?: string;
  desc?: string;
  link?: string;
}

export interface ConferencePaper {
  desc?: string;
  link?: string;
}

export interface MemberPublication{
    desc?: string;
    link?: string;
  }

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  desc: string;
  img: string;
  linkedin?: string;
  email?: string;
  order: number;
  awards: Award[]; // always an array, can be empty
  about?: string;
  publications?: MemberPublication[];
  ConferencePapers?: ConferencePaper[];
  activities?: Activity[];
}

export interface AlumniMember{
  id: string
  name: string
  description: string
  imageUrl?: string
  graduationYear?: number | null
  currentPosition?: string
}

export interface NewsItem {
  _id: string;
  heading: string;
  body: string[];
  mainImage: string;
  date: string;
  otherImage?: string[];
}

export interface PublicationItem {
  _id: string;
  title: string;
  details: string;
  link: string;
  imgUrl: string;
  date: string;
  status: string;
  publication_sequence?: number;
  journal?: string;
  doi?: string; 
}

export interface ResearchProject {
  _id: string;
  title: string;
  body: string[];
  mainImage: string;
  otherImg: string[];
  date: string;
  period: string;
  sponsors: string;
  collaborators: string;
  metadescription: string;

}

// Add this interface to your existing types
export interface ResearchCardData {
  _id: string;
  title: string;
  mainImage: string;
  period: string;
  sponsors: string;
  collaborators: string;
  body: string[];
  badge?: string;
}

export interface AppContextType {
  Data: unknown;
  setData: (data: unknown) => void;
  showLoading: boolean;
  setShowLoading: (loading: boolean) => void;
}


export interface IntroDataType {
  slogan: string;
  research_oneLine: string;
  research_Desc: string;
  publication_oneLine: string;
  publication_desc: string;

}


export interface OpportunityType {
    _id:string;
  announcementStatus:boolean;
  title:string;
  body:string;
  link:string;
}