import React, { useState } from "react";
import "../css/Profile.css";
const Profile = () => {
  const [files, setFiles] = useState([]);
  const [username, setUsername] = useState("");

  //const로 변수명을 설정하거나 기능명 설정
  const 파일변경기능 = (e) => {
    //파일을 변경했을 때 프로필 썸네일에 이미지들 주소가 넘어갈 수 있도록 설정
    const 선택한파일들 = Array.from(e.target.files);
    console.log("선택한파일들", 선택한파일들);
    setFiles(선택한파일들);
  };

  const 유저네임변경기능 = (e) => {
    setUsername(e.target.value);
  };

  // 1. fetch 버전 = 설치가 필요없는 리액트에서 제공하는 java 백엔드와 통신하는 기능
  const 이미지업로드1 = () => {
    const formData = new FormData(); // files 이미지 파일이 여러개이기 때문에 묶어서 보내려고
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });
    formData.append("username", username);
    //   /profile/upload  3000번 백엔드포트를 타야하는지?
    fetch("http://localhost:9007/profile/upload", {
      method: "POST", //DB에 값을 저장하기 위해 Post 사용
      headers: { "Content-Type": "multipart/form-data" }, //데이터에 파일(이미지)이 포함됨을 자바에 알려줌
      body: formData,
    })
      //mysql DB에 값 넣기를 성공했다면! 성공 후 수행할 작업
      .then((response) => {
        // 응답에 대한 결과를 json형식으로 받음
        return response.json();
      })
      .then((data) => {
        // db에 저장된 프로필사진과 닉네임을 보여주기
        // 업로드하고 사용자들이 눈치못채게 새로고침하기
        페이지새로고침();
      });
  };
  // 2. axios async await 버전 = 3번의 업그레이드 버전 try / catch 를 사용해서 오류 처리
  const 이미지업로드2 = () => {};

  // 3. axios then 버전
  const 이미지업로드3 = () => {};
  const 페이지새로고침 = () => {};

  return (
    <div>
      <h1>프로필 이미지 업로드</h1>
      {/*
       <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
       위 아래 코드 동일한 기능을 작동하지만 const를 이용해서 기능을 구분짓는 것과 기능을 한 번에 작성해주는 차이
       <input type="file" multiple onChange={파일변경기능} />
       */}
      <div className="profile-thumbnail">
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(file)} />
            </div>
          ))}
      </div>
      <input type="file" multiple onChange={파일변경기능} />
      <input
        type="text"
        placeholder="닉네임을 입력하세요."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={이미지업로드3}>프로필저장하기</button>
    </div>
  );
};
export default Profile;
