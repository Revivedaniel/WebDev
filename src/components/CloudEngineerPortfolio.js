const CloudEngineerPortfolio = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Cloud Engineering Knowledge</h3>
            <h3 className="title">Azure</h3>
          </div>
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://azure.microsoft.com/en-us/products/app-service/"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/appServices.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://azure.microsoft.com/en-us/products/app-service/static"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/staticWebApps.webp" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://azure.microsoft.com/en-us/products/cosmos-db"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/cloud/cosmosDB.webp" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net"
                  target="_blank"
                  rel="noreferrer"                 
                >
                  <img src="img/cloud/applicationInsights.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://azure.microsoft.com/en-us/products/virtual-machines"   rel="noreferrer" target="_blank">
                  <img src="img/cloud/vm.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/vnet.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/governance/policy/overview"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/policy.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/bicep.webp" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://registry.terraform.io/providers/hashicorp/azurerm/latest"  rel="noreferrer" target="_blank">
                  <img src="img/cloud/terraform.webp" alt="image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudEngineerPortfolio;
