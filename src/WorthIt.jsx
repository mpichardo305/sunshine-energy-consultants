// src/WorthIt.tsx
import React from "react";
import Layout from "./Layout";

export default function WorthIt() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Layout>
      {/* Essay content */}
      <main className="py-8">

      <article className="max-w-2xl mx-auto p-8 text-gray-700 text-lg leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Are solar panels worth it?</h1>
        <p className="mb-4">
If you are here, it means you are taking the right and responsible first step of learning about other homeowners experiences with going solar. Many homeowners start their search by asking themselves this question... Are solar panels worth it? The right answer is, it depends on your situation and your utility bill. But I can guarantee you that there are some homeowners that are gettign deals, and you should too. 
</p>
<p className="mb-4">
Central Florida is growing at an incredible pace, particularly around major hubs like Tampa and Orlando, as well as smaller but rapidly expanding cities and towns like Sarasota, Ocala, and Fort Myers. Unfortunately, many utility providers—such as Tampa Electric (TECO), Florida Power & Light (FPL), or Duke Energy—often struggle to update their infrastructure quickly enough to meet soaring demand. This can lead to higher rates, unexpected fees, and sky-high monthly bills. Ironically, some of these utilities use solar power themselves—then mark up that solar energy and pass the costs on to you. By installing your own solar panels, you bypass these middleman fees, gain control over your energy costs, and lock in predictable pricing for the long term.
</p>
<p className="mb-4">
Additionally, solar panels can increase property values and reduce long-term expenses. They’re environmentally friendly, too, cutting down on carbon emissions and the region’s dependence on fossil fuels. If you have concerns about your current utility bill—whether it’s Duke Energy or another provider—we can help analyze your usage to see if you’re getting a fair deal. Oftentimes, going solar not only saves money but ensures you’re paying for the energy you actually use, not inflated prices for the same sunlight.
        </p>
      </article>
      </main>
    </Layout>
    </div>
  );
}