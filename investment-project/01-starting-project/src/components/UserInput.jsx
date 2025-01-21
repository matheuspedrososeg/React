export default function UserInput() {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial investment</label>
                <input type="number" required/>
            </p>
            <p>
                <label htmlFor="">Annual investment</label>
                <input type="number" required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected return</label>
                <input type="number" required/>
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required/>
            </p>
        </div>
    </section>
}