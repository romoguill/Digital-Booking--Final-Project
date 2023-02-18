import React from "react";

function ProfilePicture({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <div
      style={{
        backgroundColor: "#F0572D",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {initials}
    </div>
  );
}

function UserProfile({ name }) {
  return (
    <div style={{ display: "flex", alignItems: "center", fontFamily: "Roboto, sans-serif" }}>
      <ProfilePicture name={name} />
      <div style={{ marginLeft: "10px" }}>{name}</div>
    </div>
  );
}

export default UserProfile;