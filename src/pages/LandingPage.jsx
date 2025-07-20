import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import { Edit, Save } from "lucide-react";

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    url: "",
    color: "#8a6f47",
  });
  const [customButtons, setCustomButtons] = useState([]);

  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [headingText, setHeadingText] = useState(
    "a luxurious way to enjoy your life"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { text, url, color } = formData;

    const newButton = (
      <a key={Date.now()} href={url} target="_blank" rel="noopener noreferrer">
        <button
          className={styles.customButton}
          style={{ backgroundColor: color }}
        >
          {text}
        </button>
      </a>
    );

    setCustomButtons((prev) => [...prev, newButton]);
    setShowForm(false);

    setFormData({
      text: "",
      url: "",
      color: "#8a6f47",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <p>best place to relax and enjoy</p>

        <div className={styles.headingRow}>
          {isEditingHeading ? (
            <>
              <textarea
                value={headingText}
                onChange={(e) => setHeadingText(e.target.value)}
                className={styles.editTextarea}
                rows={2}
                autoFocus
              />
              <Save onClick={() => setIsEditingHeading(false)} />
            </>
          ) : (
            <div className={styles.headingRow}>
              <h1>{headingText}</h1>
              <Edit size={35} onClick={() => setIsEditingHeading(true)} />
            </div>
          )}
        </div>

        <div>
          {customButtons.length > 0 && (
            <div className={styles.preview}>{customButtons}</div>
          )}
          <div className={styles.button}>
            <button onClick={() => setShowForm(!showForm)}>Add Button</button>
          </div>

          {showForm && (
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <input
                type="text"
                name="text"
                placeholder="Button Text"
                value={formData.text}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="url"
                placeholder="Button URL"
                value={formData.url}
                onChange={handleInputChange}
              />
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
              />
              <button type="submit">Create</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
