export default function InputTitle({typeTitleComp, setTypeTitleComp}){
    return(
        <>
         <input id="inputTitle" className="border border-danger border-3" type="text" value={typeTitleComp} onChange={(e) => setTypeTitleComp(e.target.value)} />
        </>
       
    )
    
}