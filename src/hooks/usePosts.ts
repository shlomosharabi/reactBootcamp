import React, { Dispatch ,SetStateAction, useState } from 'react'

export interface Article{
    source:source,
    name:string,
    author:string,
    urlToImage:string,
    title:string,
    url:string
    
}
export interface source{
    name:string,
    id:string
}
export interface SetArticles {
    setArticles: Dispatch<SetStateAction<Article[]>>;
}
export interface articalContent{
    articalContent:string;
}
export interface setArticleContent{
    setArticleContent:Dispatch<SetStateAction<Article[]>>;
}
export interface editorKey{
    editorKey:string
}
export interface isEditor{
    isEditor: boolean
}
export interface setIsEditor{
    setIsEditor: Dispatch<SetStateAction<boolean>>;
}
export interface URL{
    URL: string
}
export interface articlesToDisplay{
    source:source,
    name:string,
    author:string,
    urlToImage:string,
    title:string,
    url:string

}
export interface setArticlesToDisplay{
    setArticlesToDisplay:Dispatch<SetStateAction<articlesToDisplay[]>>;

}
const usePosts = () => {

   const [articles,setArticles] = useState<Article[]>([])
   
   const [articlesToDisplay,setArticlesToDisplay] = useState<articlesToDisplay[]>([])

   const editorKey:string = "1234"

   const [isEditor,setIsEditor] = useState<boolean>(false);
   
   const URL:string =` https://newsapi.org/v2/top-headlines?country=us&apiKey=b73d6398d05b43bf8df72b4ca814c3d8`;

   const [articalContent,setArticleContent] = useState<string>()

  return { articles , setArticles , editorKey ,isEditor ,setIsEditor ,URL ,articalContent ,setArticleContent ,articlesToDisplay,setArticlesToDisplay}
}

export default usePosts
