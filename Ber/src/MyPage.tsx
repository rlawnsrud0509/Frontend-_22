import * as S from "./loginSource/style";

import userData from "./data.json";

function MyPage() {
  let userInterests = null;
  let postInterests: any = [[]];
  let userPost: any = [];

  //유저 태그
  if (Object.keys(userData.user1.interests).length > 0) {
    userInterests = userData.user1.interests.map(function (interest: string) {
      return <S.interests>{interest}</S.interests>;
    });
  }

  userPost = userData.user1.posts.map((post) => {
    let imgLink: string = "resource/" + post.img;

    //게시글 태그
    postInterests = post.tags.map((tag) => {
      return <S.postTag>{tag}</S.postTag>;
    });

    return (
      <S.myPost>
        <S.postImg width={7777} height={7777} Name={imgLink} alt=""></S.postImg>

        <S.postTextDiv>
          <S.postTitle>{post.title}</S.postTitle>
          <S.postSummary>{post.summary}</S.postSummary>
          <S.postIconDiv>
            <S.postIcon
              width={5}
              height={110}
              Name={"resource/heart.svg"}
            ></S.postIcon>
            {post.heart}
            <S.postIcon
              width={5}
              height={110}
              Name={"resource/messege.svg"}
            ></S.postIcon>
            {post.chat}
          </S.postIconDiv>
          <S.postTagDiv>{postInterests}</S.postTagDiv>
        </S.postTextDiv>
      </S.myPost>
    );
  });

  return (
    <S.container>
      <S.userInfo>
        <S.userIcon
          width={7777}
          height={7777}
          Name={"resource/userIcon.svg"}
        ></S.userIcon>
        <S.userName>
          <b>{userData.user1.name}</b>
        </S.userName>
        <S.userGCN>
          {userData.user1.grade}학년 {userData.user1.class}반{" "}
          {userData.user1.studentNumber}번
        </S.userGCN>
        <S.statusMessage>{userData.user1.statusMessage}</S.statusMessage>
        <S.divLine></S.divLine>
        <S.interestDiv>
          {Object.keys(userData.user1.interests).length < 1 && (
            <S.noInterests>나를 표현할 멋진 태그를 설정해보세요</S.noInterests>
          )}
          {userInterests}
        </S.interestDiv>
        <S.interestTextDiv>
          <S.Smile width={10} height={75} Name={"resource/Smile.svg"}></S.Smile>
          {Object.keys(userData.user1.interests).length > 0 && (
            <S.tagText>
              <b>{userData.user1.name}</b>님은 이런 것들에 관심 있어요!
            </S.tagText>
          )}
          {Object.keys(userData.user1.interests).length < 1 && (
            <S.tagText>이런 것들에 관심 있어요!</S.tagText>
          )}
        </S.interestTextDiv>
      </S.userInfo>
      {Object.keys(userData.user1.posts).length > 0 && (
        <S.postText width={136} height={53} Name={"resource/postIcon.svg"}>
          게시글
        </S.postText>
      )}

      {Object.keys(userData.user1.posts).length > 0 && (
        <S.myPostDiv>{userPost}</S.myPostDiv>
      )}

      {Object.keys(userData.user1.posts).length < 1 && (
        <S.myPostDiv>
          <S.noPost>
            게시글이 없네요.{"\n"} 친구들과 멋진 글을 공유해보세요!
          </S.noPost>
        </S.myPostDiv>
      )}
    </S.container>
  );
}

export default MyPage;
