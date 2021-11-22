import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";
import { Link } from "react-router-dom";
import PdfIcon from "../../Assets/pdf-icon.png";

const Announcment = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(announcment);
  return (
    <div>
      {announcment.map((item) => (
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p className="amt__txt">{item.text}</p>
            <Link to = {item.imageUrl}>
               <img className="amt__img" src={PdfIcon} alt={item.text} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcment;
