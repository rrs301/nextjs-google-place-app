import React from 'react'

function ShimmerEffectItem() {
  return (
    <div>
    <div className="
     rounded-md p-4 max-w-sm w-full">
<div className="animate-pulse flex space-x-4">
<div className="rounded-2xl bg-slate-200 h-[90px] w-[90px]"></div>
<div className="flex-1 space-y-6 py-1">
  <div className="h-5 bg-slate-200 rounded"></div>
  <div className="space-y-3">
    <div className="grid grid-cols-3 gap-4">
      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
    </div>
    <div className="h-2 bg-slate-200 rounded"></div>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default ShimmerEffectItem