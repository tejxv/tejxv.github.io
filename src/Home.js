import React from 'react';


function Redir() {
    return (
        <div>
            <script>
            setTimeout(function() {
    window.location.replace('https://drive.google.com/file/d/1CqApJJur5IDZtwrM4py3CA2Wbq4whJPQ/view?usp=sharing')
     }, 1000);
            </script>
        </div>
    )
}



export default Redir;
