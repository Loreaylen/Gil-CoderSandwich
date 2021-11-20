import React from "react"
import Loader from "react-loader-spinner"

const Loading = () => {

    return(
        <div>
        <Loader
        type="Puff"
        color="#81AC49"
        height={100}
        width={100}
        timeout={1800}
      />
      </div>
    ) 
}

export default Loading;