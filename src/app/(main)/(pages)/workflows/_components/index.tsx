import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col gap-4 p-2'>
            <Workflow description='creating a test workflow' id='323dsdsf' name='automation' publish={false}/>
            <Workflow description='creating a test workflow' id='323dsdsf' name='automation' publish={false}/>
            <Workflow description='creating a test workflow' id='323dsdsf' name='automation' publish={false}/>
            <Workflow description='creating a test workflow' id='323dsdsf' name='automation' publish={false}/>

        </section>
    </div>
  )
}

export default Workflows