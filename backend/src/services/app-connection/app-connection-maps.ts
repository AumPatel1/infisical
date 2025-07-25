import { AppConnection, AppConnectionPlanType } from "./app-connection-enums";

export const APP_CONNECTION_NAME_MAP: Record<AppConnection, string> = {
  [AppConnection.AWS]: "AWS",
  [AppConnection.GitHub]: "GitHub",
  [AppConnection.GitHubRadar]: "GitHub Radar",
  [AppConnection.GCP]: "GCP",
  [AppConnection.AzureKeyVault]: "Azure Key Vault",
  [AppConnection.AzureAppConfiguration]: "Azure App Configuration",
  [AppConnection.AzureClientSecrets]: "Azure Client Secrets",
  [AppConnection.AzureDevOps]: "Azure DevOps",
  [AppConnection.Databricks]: "Databricks",
  [AppConnection.Humanitec]: "Humanitec",
  [AppConnection.TerraformCloud]: "Terraform Cloud",
  [AppConnection.Vercel]: "Vercel",
  [AppConnection.Postgres]: "PostgreSQL",
  [AppConnection.MsSql]: "Microsoft SQL Server",
  [AppConnection.MySql]: "MySQL",
  [AppConnection.Camunda]: "Camunda",
  [AppConnection.Windmill]: "Windmill",
  [AppConnection.Auth0]: "Auth0",
  [AppConnection.HCVault]: "Hashicorp Vault",
  [AppConnection.LDAP]: "LDAP",
  [AppConnection.TeamCity]: "TeamCity",
  [AppConnection.OCI]: "OCI",
  [AppConnection.OracleDB]: "OracleDB",
  [AppConnection.OnePass]: "1Password",
  [AppConnection.Heroku]: "Heroku",
  [AppConnection.Render]: "Render",
  [AppConnection.Flyio]: "Fly.io",
  [AppConnection.GitLab]: "GitLab",
  [AppConnection.Cloudflare]: "Cloudflare"
};

export const APP_CONNECTION_PLAN_MAP: Record<AppConnection, AppConnectionPlanType> = {
  [AppConnection.AWS]: AppConnectionPlanType.Regular,
  [AppConnection.GitHub]: AppConnectionPlanType.Regular,
  [AppConnection.GitHubRadar]: AppConnectionPlanType.Regular,
  [AppConnection.GCP]: AppConnectionPlanType.Regular,
  [AppConnection.AzureKeyVault]: AppConnectionPlanType.Regular,
  [AppConnection.AzureAppConfiguration]: AppConnectionPlanType.Regular,
  [AppConnection.AzureClientSecrets]: AppConnectionPlanType.Regular,
  [AppConnection.AzureDevOps]: AppConnectionPlanType.Regular,
  [AppConnection.Databricks]: AppConnectionPlanType.Regular,
  [AppConnection.Humanitec]: AppConnectionPlanType.Regular,
  [AppConnection.TerraformCloud]: AppConnectionPlanType.Regular,
  [AppConnection.Vercel]: AppConnectionPlanType.Regular,
  [AppConnection.Postgres]: AppConnectionPlanType.Regular,
  [AppConnection.MsSql]: AppConnectionPlanType.Regular,
  [AppConnection.Camunda]: AppConnectionPlanType.Regular,
  [AppConnection.Windmill]: AppConnectionPlanType.Regular,
  [AppConnection.Auth0]: AppConnectionPlanType.Regular,
  [AppConnection.HCVault]: AppConnectionPlanType.Regular,
  [AppConnection.LDAP]: AppConnectionPlanType.Regular,
  [AppConnection.TeamCity]: AppConnectionPlanType.Regular,
  [AppConnection.OCI]: AppConnectionPlanType.Enterprise,
  [AppConnection.OracleDB]: AppConnectionPlanType.Enterprise,
  [AppConnection.OnePass]: AppConnectionPlanType.Regular,
  [AppConnection.MySql]: AppConnectionPlanType.Regular,
  [AppConnection.Heroku]: AppConnectionPlanType.Regular,
  [AppConnection.Render]: AppConnectionPlanType.Regular,
  [AppConnection.Flyio]: AppConnectionPlanType.Regular,
  [AppConnection.GitLab]: AppConnectionPlanType.Regular,
  [AppConnection.Cloudflare]: AppConnectionPlanType.Regular
};
