import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureHdinsightExtensionsApi implements ICredentialType {
        name = 'N8nDevAzureHdinsightExtensionsApi';

        displayName = 'Azure Hdinsight Extensions API';

        icon: Icon = { light: 'file:../nodes/AzureHdinsightExtensions/azure-hdinsight-extensions.png', dark: 'file:../nodes/AzureHdinsightExtensions/azure-hdinsight-extensions.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Hdinsight Extensions API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
