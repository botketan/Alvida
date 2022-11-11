const Loginp = () => {
    return ( 
        <div className="login">
            <form className="form" >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="xyz@iitg.ac.in" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <button className="primary" onclick>Login</button>
        </form>
        </div>
     );
}
 
export default Loginp;