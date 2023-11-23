import "./FooterCard.css";

export const FooterCard = () => {
return (
  <div className="footer-container">
    <div className="footer-griding">

      <div className="text-footer">
        <p className="text-footer-title">Acme ❌ Games</p>
        <p className="text-footer-p">Little group of people that like to code and have put all their blood, sweat and tears into this! <br/><span className="little-copyright-text">© ACME team, 2023. All rights reserved.</span></p>
      </div>

    <div className="tabular-data">
      <table>
        <thead>
            <tr className="headers-tabular">
              <th>Developers</th>
              <th>Help</th>
              <th>Products</th>
            </tr>
        </thead>
            <tbody>
              <tr className="content-tabular">
                <td>Resources</td>
                <td>Support</td>
                <td>Old projects</td>
              </tr>

              <tr className="content-tabular">
                <td>About us</td>
                <td>Sign up</td>
                <td>Our history</td>
              </tr>

              <tr className="content-tabular">
                <td>Contact</td>
                <td>Sign in</td>
                <td>Dedication</td>
              </tr>
            </tbody>
            </table>
          </div>

    </div>
    
  </div>
)
}