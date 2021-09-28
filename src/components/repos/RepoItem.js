import React from 'react'
import PropTypes from 'prop-types'
// one file can only have one default export
//but can have multiple named export
export const RepoItem = ({repo}) => {
    return (
        <div className = 'card'>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}