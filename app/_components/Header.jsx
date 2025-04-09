// 'use client'
// import React, { useState, Suspense } from 'react'
// import LogoTitle from './_components/LogoTitle'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft, ArrowRight } from 'lucide-react'
// import LogoDesc from './_components/LogoDesc'
// import LogoPalette from './_components/LogoPalette'
// import LogoIdea from './_components/LogoIdea'
// import LogoDesigns from './_components/LogoDesigns'
// import PricingModel from './_components/PricingModel'

// // Create a wrapper component for LogoTitle
// function LogoTitleWrapper() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LogoTitle />
      
//     </Suspense>
//   )
// }

// function CreateLogo() {
//   const [step, setStep] = useState(1)
//   const [formData, setFormData] = useState()
  
//   const onHandleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//   }

//   return (
//     <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
//       {step == 1 ? 
//         <LogoTitleWrapper onHandleInputChange={(v) => onHandleInputChange('title', v)} 
//           formData={formData}/> :
//         step == 2 ?
//           <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc', v)}
//             formData={formData}/> :
//         step == 3 ?
//           <LogoPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)}
//             formData={formData}/> :
//         step == 4 ?
//           <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design', v)}
//             formData={formData}/> :
//         step == 5 ?
//           <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)}
//             formData={formData}/> :
//         step == 6 ?
//           <PricingModel onHandleInputChange={(v) => onHandleInputChange('pricing', v)}
//             formData={formData}/> : null
//       }
//       <div className='flex items-center justify-between mt-10'>
//         {step != 1 && <Button variant="outline" onClick={() => setStep(step-1)}><ArrowLeft/>Previous</Button>}
//         <Button onClick={() => setStep(step+1)}><ArrowRight/>Continue</Button>
//       </div>
//     </div>
//   )
// }

// export default CreateLogo






'use client'
import React, { useState, Suspense } from 'react'
import LogoTitle from './LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './LogoDesc'
import LogoPalette from './LogoPalette'
import LogoIdea from './LogoIdea'
import LogoDesigns from './LogoDesigns'
import PricingModel from './PricingModel'

// ✅ Wrapper now passes props correctly
function LogoTitleWrapper({ formData, onHandleInputChange }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LogoTitle 
        formData={formData}
        onHandleInputChange={onHandleInputChange}
      />
    </Suspense>
  )
}

function CreateLogo() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({}) // ✅ default as empty object

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step === 1 ? (
        <LogoTitleWrapper 
          onHandleInputChange={(v) => onHandleInputChange('title', v)} 
          formData={formData}
        />
      ) : step === 2 ? (
        <LogoDesc 
          onHandleInputChange={(v) => onHandleInputChange('desc', v)}
          formData={formData}
        />
      ) : step === 3 ? (
        <LogoPalette 
          onHandleInputChange={(v) => onHandleInputChange('palette', v)}
          formData={formData}
        />
      ) : step === 4 ? (
        <LogoDesigns 
          onHandleInputChange={(v) => onHandleInputChange('design', v)}
          formData={formData}
        />
      ) : step === 5 ? (
        <LogoIdea 
          onHandleInputChange={(v) => onHandleInputChange('idea', v)}
          formData={formData}
        />
      ) : step === 6 ? (
        <PricingModel 
          onHandleInputChange={(v) => onHandleInputChange('pricing', v)}
          formData={formData}
        />
      ) : null}

      <div className='flex items-center justify-between mt-10'>
        {step !== 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            <ArrowLeft className="mr-2" /> Previous
          </Button>
        )}
        {step < 6 && (
          <Button onClick={() => setStep(step + 1)}>
            Continue <ArrowRight className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default CreateLogo
