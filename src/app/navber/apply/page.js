'use client'
export default function Apply(){
    return(
        
        <div className="apply">
        <h1>Step 1: Check availability of e‑Passport in your region</h1>
    <h1 >Are you Bangladeshi?</h1>
    <div>
    <input type="radio" name="status"/>YES
    <br/>
    <input type="radio" name="status" />NO
    </div>
    <form className="bangladeshi">
        <p>Select District your present address</p>
        <input type="text" />
        <p> Select the police station nearest to your present address</p>
        <input type="text" />
    </form>
    <form className="pakistan">
        <p>Select District your present address</p>
        <input type="text" />
        <p> Select the police station nearest to your present address</p>
        <input type="text" />
    </form>
    </div>
    )
}