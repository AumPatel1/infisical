import { SecretSync } from "@app/services/secret-sync/secret-sync-enums";
import { registerSyncSecretsEndpoints } from "./secret-sync-endpoints";
import {
  CloudflarePagesSyncSchema,
  CreateCloudflarePagesSyncSchema,
  UpdateCloudflarePagesSyncSchema
} from "@app/services/secret-sync/cloudflare-pages/cloudflare-pages-schema";

export const registerCloudflarePagesSyncRouter = async (server: FastifyZodProvider) =>
  registerSyncSecretsEndpoints({
    destination: SecretSync.CloudflarePages,
    server,
    responseSchema: CloudflarePagesSyncSchema,
    createSchema: CreateCloudflarePagesSyncSchema,
    updateSchema: UpdateCloudflarePagesSyncSchema
  });
