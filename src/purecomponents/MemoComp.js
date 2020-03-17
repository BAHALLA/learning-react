import React from "react";

function MemoComp({name}) {
    console.log('render memo');
    return (
      <div>
          {name}
      </div>
    );
}
export default React.memo(MemoComp);