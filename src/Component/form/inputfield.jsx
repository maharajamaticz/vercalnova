"use client"
import { useEffect, useRef, useState } from "react";
import styles from "@/css/formInputs.module.css";
import Images from "@/app/Images";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import ImgComponent from "../global/imgComponent";
import Select, { components } from "react-select";

export const InputComponent = ({
    type = "text",
    placeholder = " ",
    labelText = "Label Name",
    errorText,
    copyBtn = false,
    onInputChange,
    inputName
}) => {
    const inputRef = useRef(null);
    const [copyStatus, setCopyStatus] = useState("");

    const handleCopy = () => {
        if (inputRef.current) {
            if (inputRef.current.value.trim()) {
                inputRef.current.select();
                navigator.clipboard.writeText(inputRef.current.value)
                    .then(() => setCopyStatus("Copied!"))
                    .catch(() => setCopyStatus("Failed to copy!"));
                setTimeout(() => {
                    setCopyStatus("");
                }, 2000);
            }
        }
    };

    const handleChange = (event) => {
        if (onInputChange) {
            onInputChange(event.target.value); // Notify parent of changes
        }
    };

    return (
        <div className={`${styles.inputsContainer} ${styles.inputComponent}`}>
            <label className={styles.inputLabel} htmlFor="input">{labelText}</label>
            <div className={styles.inputWrapper}>
                <input
                    ref={inputRef}
                    id="input"
                    type={type}
                    placeholder={placeholder}
                    className={`${styles.inputField} ${copyBtn && styles.copyInput}`}
                    onChange={handleChange}
                    name={inputName}
                />
                {copyBtn && (
                    <button
                        type="button"
                        className={styles.copyBtn}
                        onClick={handleCopy}
                    >
                        {copyStatus.length !== 0 ? (
                            <IoCheckmarkDoneCircle />
                        ) : (
                            <ImgComponent src={Images.copyIcon} alt="copy" />
                        )}
                    </button>
                )}
            </div>
            <p className={styles.errorText}>{errorText}</p>
        </div>
    );
};

// export const InputComponent = ({
//     type = "text",
//     placeholder = " ",
//     labelText = "label Name",
//     errorText,
//     copyBtn = false,
// }) => {
//     const inputRef = useRef(null);
//     const [copyStatus, setCopyStatus] = useState("");

//     const handleCopy = () => {
//         if (inputRef.current) {
//             if (inputRef.current.value.trim()) {
//                 inputRef.current.select();
//                 navigator.clipboard.writeText(inputRef.current.value)
//                     .then(() => setCopyStatus("Copied!"))
//                     .catch(() => setCopyStatus("Failed to copy!"));
//                 setTimeout(() => {
//                     setCopyStatus("")
//                 }, 2000);
//             }
//         }
//     };

//     return (
//         <div className={`${styles.inputsContainer} ${styles.inputComponent}`}>
//             <label className={styles.inputLabel} htmlFor="input">{labelText}</label>
//             <div className={styles.inputWrapper}>
//                 <input
//                     ref={inputRef}
//                     id="input"
//                     type={type}
//                     placeholder={placeholder}
//                     className={`${styles.inputField} ${copyBtn && styles.copyInput}`}
//                 />
//                 {copyBtn && (
//                     <button
//                         type="button"
//                         className={styles.copyBtn}
//                         onClick={handleCopy}
//                     >
//                         {copyStatus.length !== 0 ?
//                             <IoCheckmarkDoneCircle /> :
//                             <ImgComponent src={Images.copyIcon} alt="copy" />
//                         }
//                     </button>
//                 )}
//             </div>
//             <p className={styles.errorText}>{errorText}</p>
//         </div>
//     );
// };

export const TextAreaInputComponent = ({ onInputChange, labelText = "label Name", placeholder, errorText }) => {
    const handleChange = (event) => {
        if (onInputChange) {
            onInputChange(event.target.value);
        }
    };
    return <div className={`${styles.inputsContainer} ${styles.textAreaInputComponent}`}>
        <label className={styles.inputLabel} htmlFor="">{labelText}</label>
        <div className={styles.inputWrapper}>
            <textarea onChange={handleChange} placeholder={placeholder}></textarea>
        </div>
        <p className={styles.errorText}>{errorText}</p>
    </div>
}

export const FileUploadInputComponent = ({
    fileInputName,
    labelText = "Label Name",
    placeholder = "Upload Your Image",
    errorText,
    onInputChange
}) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            if(onInputChange){
                onInputChange(file);
            }
        }
    };

    const handleDelete = () => {
        setFileName("");
        document.getElementById(fileInputName).value = "";
    };

    return (
        <div className={`${styles.inputsContainer} ${styles.fileUploadInputComponent}`}>
            <label className={styles.inputLabel} htmlFor={fileInputName}>
                {labelText}
            </label>
            <div className={styles.fileInputWrapper}>
                <input
                    type="file"
                    id={fileInputName}
                    onChange={handleFileChange}
                />
                <label htmlFor={fileInputName}>
                    <div className={`${styles.imgBox} ${styles[fileInputName]}`}></div>
                    <p>{fileName || placeholder}</p>
                </label>
                {fileName && (
                    <button type="button" onClick={handleDelete}>
                        <ImgComponent src={Images.deleteIcon} alt="delete" />
                    </button>
                )}
            </div>
            <p className={styles.errorText}>{errorText}</p>
        </div>
    );
};

export const SelectInputComponent = ({
    labelText = "label Name",
    options,
    placeholderText,
    defultSelectValue,
    getSelectValues,
    optionsType,
    errorText,
    onInputChange
}) => {
    const [values, setValues] = useState([]);
    const handleChange = (selectedValues) => {
        setValues(selectedValues);
        if(onInputChange){
            onInputChange(selectedValues.value)
        }
        console.log('selectedValues',selectedValues.value)
    };

    // useEffect(() => {
    //   if (getSelectValues) getSelectValues(values);
    // }, [values]);

    // useEffect(() => {
    //   if (defultSelectValue) {
    //     setValues(defultSelectValue);
    //   }
    // }, [defultSelectValue]);

    // const dynamicOption = useMemo(() => {
    //   if (optionsType) {
    //     if (optionsType === "coursesOption") {
    //       const filterData = DynamicCourseOption();
    //       return filterData;
    //     }
    //   } else {
    //     return options;
    //   }
    // }, [optionsType]);

    // useEffect(() => {
    //   if (dynamicOption) {
    //     if (optionsType === "coursesOption") {
    //       // console.log("dynamicOption >>>", dynamicOption[0]);
    //       setValues(dynamicOption[0]);
    //     }
    //   }
    //   // if (defultSelectValue) {
    //   //   setValues(defultSelectValue);
    //   // }
    // }, [dynamicOption]);

    const customStyles = {
        input: (baseStyles) => ({
            ...baseStyles,
            color: "#fff",
            padding: "0.4rem",
            border: "none",
        }),
        singleValue: (provided, state) => ({
            ...provided,
            border: "none",
            color: "#fff", // Sets the color of the selected value to white

        }),
        control: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            backgroundColor: "#000",
            border: "1px solid #5e5e5e",
            "&:hover": {
                border: "1px solid #fff",
            },
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            textOverflow: "ellipsis",
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "flex",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#fff",
        }),
        multiValue: (provided) => ({
            ...provided,
            maxWidth: "fit-content",
            backgroundColor: "transprent",
            borderRadius: "0",
            padding: "0",
            marginRight: "0",
        }),
        multiValueRemove: (provided) => ({ ...provided, display: "none" }),
        option: (provided, state) => ({
            ...provided,
            fontSize: "1rem",
            fontWeight: "500",
            backgroundColor: state.isSelected ? "#3d3d3d" : "#fff",
            color: state.isSelected ? "#fff" : "gray",
            cursor: "pointer",
            transition: "background-color 0.3s",
            "&:hover": {
                color: "#fff",
                backgroundColor: "#3d3d3d",
            },
        }),
    };

    return (
        <>
            <div className={`${styles.inputsContainer} ${styles.inputComponent}`}>
                <label className={styles.inputLabel} htmlFor="input">{labelText}</label>
                <div className={styles.inputWrapper}>
                    <div className={styles.reactSelectContainer}>
                        <Select
                            //   isSearchable={false}
                            name="colors"
                            options={options}
                            onChange={handleChange}
                            //   defaultValue={optionsType ? dynamicOption[0] : defultSelectValue}
                            // defaultValue={values[0]}
                            // defaultValue={
                            //   dynamicOption.length !== 0 ? dynamicOption[0] : defultSelectValue
                            // }
                            placeholder={placeholderText ? placeholderText : " "}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: "#3d3d3d",

                                },
                            })}
                        />
                    </div>
                </div>
                <p className={styles.errorText}>{errorText}</p>
            </div>

        </>
    );
};
