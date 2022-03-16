import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {PostDataType} from '../../../redux/state';

type MyPostType = {
    postData:  PostDataType[],
}

const MyPosts = (props: MyPostType): JSX.Element => {

    let postElement: JSX.Element[] = props.postData.map(post =><Post  key ={post.id} message={post.message} likeCount={post.likeCount}/> )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
                {/*<Post message={PostData[0].message} likeCount={PostData[0].likeCount}/>*/}
                {/*<Post message={PostData[1].message} likeCount={PostData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;