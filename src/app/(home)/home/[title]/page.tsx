"use client";
import { useSearchParams } from 'next/navigation'; 
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Content from "@/components/Content/Content";

const SongPage: React.FC = () => {
  const searchParams = useSearchParams(); 

  return (
    <>
      <Content searchParams={searchParams} />
      <MusicPlayer searchParams={searchParams}/>
    </>
  );
};

export default SongPage;

