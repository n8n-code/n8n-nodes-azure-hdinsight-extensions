import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHdinsightExtensions implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Hdinsight Extensions',
                name: 'N8nDevAzureHdinsightExtensions',
                icon: { light: 'file:./azure-hdinsight-extensions.png', dark: 'file:./azure-hdinsight-extensions.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'HDInsight Management Client.',
                defaults: { name: 'Azure Hdinsight Extensions' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHdinsightExtensionsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
