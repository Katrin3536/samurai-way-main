import React from 'react';
import s from './Pagination.module.css';

export type PaginationPropsType = {
    onPageChanged: (p: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
}

export const Pagination:React.FC<PaginationPropsType> = ({totalUsersCount,pageSize, currentPage,onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((p, index) => {
                return <span
                    className={currentPage === p && s.selected}
                    key={index}
                    onClick={(e) => onPageChanged(p)
                    }>{p}</span>;
            })}
        </div>
    );
};