export const repos = [
 {name:"agentic-trust",role:"Trust, delegation & authorization protocol",status:"V2 FINAL — Phase 42",visibility:"Public",sha:"afb9fc7c7d7115ef9d2e156baf57331f93d44f48",url:"https://github.com/Agentic-Trust-Foundation/agentic-trust"},
 {name:"agent-pay",role:"Financial control & payment protocol/reference implementation",status:"V2 FINAL — Phase 43",visibility:"Public",sha:"534b6a2021914d90d19485dc370eedb437ea9dba",url:"https://github.com/Agentic-Trust-Foundation/agent-pay"},
 {name:"agent-site-adapter",role:"Website/service integration layer",status:"V1 FINAL; post-V2 integration work",visibility:"Public",sha:"fc72890ce37c17a8aec6f68ae1b596b7789be622",url:"https://github.com/Agentic-Trust-Foundation/agent-site-adapter"},
 {name:"agent-pay-iran",role:"Iran product/deployment profile",status:"Validation baseline; production-gated",visibility:"Private",sha:"a1b2cb032f0122e83066c5c35b4113cd2c3275d3",url:"https://github.com/Agentic-Trust-Foundation/agent-pay-iran"},
 {name:"project-docs",role:"Master project memory & cross-repository governance",status:"Synchronized",visibility:"Private",sha:"d62ceea475807d4fc98ec37dd23712361370ad2d",url:"https://github.com/Agentic-Trust-Foundation/project-docs"},
 {name:".github",role:"Organization governance and community health",status:"Active",visibility:"Public",sha:"cfae6974da6d09ba05555dedfca3b90e981bff91",url:"https://github.com/Agentic-Trust-Foundation/.github"}
];

export const phases = [
 ["35","Financial Semantics"],["36","Virtual Card / Payment Provider Architecture"],["37","Commerce Protocol Integration"],
 ["38","Real Deployment Profiles"],["39","Security Hardening"],["40","Independent Interoperability Certification"],
 ["41","V2 RC"],["42","ATF V2 Final"],["43","Agent-Pay V2 Final"]
];

export const protocols = ["MCP","A2A","OAuth","ARD","AP2","ACP","UCP"];
export const dimensions = ["Discovery","Identity","Authentication","Authorization","Delegation","Policy","Trust","Reputation","Capability","Transaction","Payment","Audit","Consent","Liability","Human Approval","A2A Delegation"];

export const evidence = ["Specification / contract","Machine-readable schema","Canonical vectors / fixtures","Implementation","Executable tests","CI validation","Cross-repository verification","Evidence manifest / SHA-256 artifacts"];
