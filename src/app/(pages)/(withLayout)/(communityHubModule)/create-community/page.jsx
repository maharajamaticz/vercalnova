"use client"
import React, { useState } from 'react'
import ComponentLayout from '@/Component/global/componentLayout';
import styles from "@/css/communityHub/createCommunityPage.module.css";
import { FileUploadInputComponent, InputComponent, TextAreaInputComponent } from '@/Component/form/inputfield';

export default function CreateCommunityPage() {

    return (
        <ComponentLayout dynamicClass={"communityHubLayout"}>
            <div className={styles.createCommunityPage}>
                <div className={styles.headerPart}>
                    <h2 className='text-blue-gradient'>Create a Community Chat Profile</h2>
                </div>
                <div className={styles.formContainer}>
                    <form>
                        <div className={styles.chooseTypeContainer}>
                            <div>
                                <input type="radio" name="channelType" id='publicChat' />
                                <label htmlFor='publicChat'>
                                    <span>
                                        Public Chat
                                    </span>
                                </label>
                            </div>

                            <div>
                                <input type="radio" defaultChecked name="channelType" id='privateChat' />
                                <label htmlFor='privateChat'>
                                    <span>
                                        Private Chat
                                    </span>
                                </label>
                            </div>
                        </div>
                        <InputComponent
                            labelText='Channel Name'
                            placeholder='Enter channel'
                        />
                        <TextAreaInputComponent labelText='Channel Description' placeholder='Enter Channel Description' />
                        <FileUploadInputComponent fileInputName={"bannerUploadInput"} labelText={"Upload Banner"} />
                        <FileUploadInputComponent fileInputName={"profileUploadInput"} labelText={"Upload Profile"} />
                        <InputComponent  labelText='Share' placeholder='Enter channel' copyBtn={true} />
                        <div className={styles.btnWrapper}>
                            <button>Create Community Chat</button>
                        </div>
                    </form>
                </div>
            </div>
        </ComponentLayout>
    )
}
