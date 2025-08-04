import React from 'react'
import ArticleProcess from '../../Shared/Components/ArticleProcessing/ArticleProcess'
import HelmetComponent from '../Helmet/HelmetProvider'

function ArticlePage() {
    return (
        <>
            <HelmetComponent title="Article Processing - International Conference on Technology Integration for Global Development" />
            <ArticleProcess />
        </>

    )
}

export default ArticlePage
