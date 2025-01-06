import React from 'react'
import ComponentLayout from '@/Component/global/componentLayout'
import CategoryList from '@/Component/saved/category'
import Friendstories from '@/Component/global/Friendstories'

export default function MyCreatorPage() {
    return (
        <ComponentLayout>
            <div className={"myCreatorTitle"}>
                <h3>My Creator</h3>
                <p>Lorem Ipsum is the text</p>
            </div>
            <Friendstories />
            <CategoryList mainTitle={"Most Recent"} subTitle={"Lorem Ipsum is the text"} listBtn loadmoreBtn={false} />
        </ComponentLayout>
    )
}
