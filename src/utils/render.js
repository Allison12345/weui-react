import React from 'react'
export const renderProp = Prop => (typeof Prop === 'function' ? <Prop /> : Prop)
