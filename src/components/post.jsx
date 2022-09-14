import React from 'react';


export default function Post({ category, thumbnail, link, title, authorName, authorLink, date }) {
    return (
        <div className="col-4 card--post p-card--highlighted">
            <header className="p-card__header">
                <h5 className="u-text--muted u-no-margin u-no-padding">
                    {category}
                </h5>
            </header>
            <div className="p-card__content">
                <div>
                    <img alt="postImage" width={350} loading="lazy" src={thumbnail} />
                    <h4>
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </h4>
                </div>
                <p className=''>
                    <i>
                        by <a href={authorLink}>{authorName}</a> on {date}
                    </i>
                </p>
            </div>
            <div className="p-card__footer">
                Article
            </div>
        </div>
    )
}
