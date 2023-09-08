import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import 'react-spring-bottom-sheet/dist/style.css'

export default function SlideUp() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <div className="main">
          MAIN CONTENT
          <button onClick={() => setOpen(!open)}>
            {open ? "CLOSE" : "OPEN"} SHEET
          </button>
        </div>
        <div className="footer">YOUR MAIN FOOTER</div>
        <BottomSheet
          open={open}
          onDismiss={() => setOpen(false)}
          header={<div className="sheetHeader">SHEET HEADER</div>}
          snapPoints={({ maxHeight }) => 0.9 * maxHeight}
          sibling={<div className="sheetFooter">YOUR MAIN FOOTER</div>}
        >
          <div className="sheetBody">SHEET BODY</div>
        </BottomSheet>
      </>
    );
  }