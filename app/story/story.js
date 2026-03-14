'use client'
import StoryBlock from '@/components/StoryBlock'
import MapView from '@/components/MapView'


export default function StoryPage() {
return (
<div className="flex">
<div className="w-1/2 p-12 space-y-32">
<StoryBlock title="Urban Inequality" text="Population density varies significantly across local authorities." />
<StoryBlock title="Household Pressure" text="Some areas support more people per household." />
<StoryBlock title="Policy Opportunity" text="Targeted climate policy delivers co-benefits." />
</div>
<div className="w-1/2 sticky top-0 h-screen">
<MapView />
</div>
</div>
)
}