import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h4 className="post__header">Username</h4>
            {/* 프로필 사진 -> 사용자 이름 ----> 설정 */}

            <img className="post__image" src="https://images.unsplash.com/photo-1606422360319-c1512f54d1b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80" alt="" />
            {/* 사진 */}
            
            <h4 className="post__text"><strong>Username</strong> caption</h4>
            {/* 좋아요, 댓글, 메세지 -----> 저장 */}

            {/* 
            사용자가 남기는 글 
            댓글 2개까지 보임
            */}
            <input className="comment" type="text" placeholder="댓글달기..." />
            <input className="comment__submit" type="submit" value="게시" />
        </div>
    )
}

export default Post
