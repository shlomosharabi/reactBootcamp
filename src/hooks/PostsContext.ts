import React, { createContext ,Dispatch ,SetStateAction} from 'react'
import {  Article , SetArticles ,editorKey ,isEditor ,setIsEditor ,URL ,articalContent  ,setArticleContent ,articlesToDisplay ,setArticlesToDisplay} from '../hooks/usePosts'


interface PostsContextInterface{
    articles: Article[],
    setArticles: Dispatch<SetStateAction<string>>;
    editorKey:string,
    isEditor: boolean,
    setIsEditor: Dispatch<SetStateAction<boolean>>,
    URL: string,
    articalContent: string,
    setArticleContent:Dispatch<SetStateAction<string>>
    articlesToDisplay: articlesToDisplay[],
    setArticlesToDisplay:Dispatch<SetStateAction<articlesToDisplay[]>>;

}

export const PostContext = createContext<PostsContextInterface | undefined>(undefined) 

