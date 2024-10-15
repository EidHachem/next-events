import Link from "next/link"
import React from "react"

import classes from "@/styles/ui/button.module.css"

const Button = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  )
}

export default Button
