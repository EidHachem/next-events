import Link from "next/link"
import React from "react"

import classes from "@/styles/ui/button.module.css"

const Button = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  )
}

export default Button
