import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl = state?.img || "";
    if (file) {
      imgUrl = await upload();
    }

    try {
      if (state) {
        await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: imgUrl,
        });
      } else {
        await axios.post("/posts", {
          title,
          desc: value,
          cat,
          img: imgUrl,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status:</b> Draft</span>
          <span><b>Visibility:</b> Public</span>

          {/* Show preview if editing existing post */}
          {state?.img && !file && (
            <img
              src={`../upload/${state.img}`}
              alt="Current"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          )}

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>

          <div className="buttons">
            <button disabled style={{ cursor: "not-allowed" }}>
              Save as a draft
            </button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {["art", "science", "technology", "cinema", "design", "food"].map((c) => (
            <div className="cat" key={c}>
              <input
                type="radio"
                checked={cat === c}
                name="cat"
                value={c}
                id={c}
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Write;
