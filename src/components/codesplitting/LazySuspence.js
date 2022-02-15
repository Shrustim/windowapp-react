import React,{lazy,Suspense } from "react";
import MyErrorBoundary from "./MyErrorBoundary";
const LazySuspence = () => {
    const OtherComponent = lazy(() => import('./OneComponent'));
    const TwoComponent = lazy(() => import('./TwoComponent'));
    return (
        <div><h2>Code Splitting - Lazy load / Suspence</h2>
       
        <MyErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                <OtherComponent />
                </section>
            </Suspense>
       </MyErrorBoundary>  
       <MyErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                <TwoComponent />
                </section>
            </Suspense>
       </MyErrorBoundary>  
        </div>
    );
}
export default LazySuspence;