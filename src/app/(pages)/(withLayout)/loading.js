import ComponentLayout from "@/Component/global/componentLayout";
import LoadingComponent from "@/Component/global/loadingComponent";
export default function Loading() {
    return <ComponentLayout dynamicClass={"communityHubLayout"}>
        <LoadingComponent />
    </ComponentLayout>
}