// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface KubernetesXyzGlobalArgs {
}

/**
 * A Release is an instance of a chart running in a Kubernetes cluster.
 * A Chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.
 * Note - Helm Release is currently in BETA and may change. Use in production environment is discouraged.
 */
export interface ReleaseArgs {
    /**
     * If set, installation process purges chart on fail. `skipAwait` will be disabled automatically if atomic is used.
     */
    atomic?: pulumi.Input<boolean>;
    /**
     * Chart name to be installed. A path may be used.
     */
    chart?: pulumi.Input<string>;
    /**
     * Allow deletion of new resources created in this upgrade when upgrade fails.
     */
    cleanupOnFail?: pulumi.Input<boolean>;
    /**
     * Create the namespace if it does not exist.
     */
    createNamespace?: pulumi.Input<boolean>;
    /**
     * Run helm dependency update before installing the chart.
     */
    dependencyUpdate?: pulumi.Input<boolean>;
    /**
     * Add a custom description
     */
    description?: pulumi.Input<string>;
    /**
     * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.
     */
    devel?: pulumi.Input<boolean>;
    /**
     * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
     */
    disableCRDHooks?: pulumi.Input<boolean>;
    /**
     * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
     */
    disableOpenapiValidation?: pulumi.Input<boolean>;
    /**
     * Prevent hooks from running.
     */
    disableWebhooks?: pulumi.Input<boolean>;
    /**
     * Force resource update through delete/recreate if needed.
     */
    forceUpdate?: pulumi.Input<boolean>;
    /**
     * Location of public keys used for verification. Used only if `verify` is true
     */
    keyring?: pulumi.Input<string>;
    /**
     * Run helm lint when planning.
     */
    lint?: pulumi.Input<boolean>;
    /**
     * The rendered manifests as JSON. Not yet supported.
     */
    manifest?: pulumi.Input<{[key: string]: any}>;
    /**
     * Limit the maximum number of revisions saved per release. Use 0 for no limit.
     */
    maxHistory?: pulumi.Input<number>;
    /**
     * Release name.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace to install the release into.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Postrender command to run.
     */
    postrender?: pulumi.Input<string>;
    /**
     * Perform pods restart during upgrade/rollback.
     */
    recreatePods?: pulumi.Input<boolean>;
    /**
     * If set, render subchart notes along with the parent.
     */
    renderSubchartNotes?: pulumi.Input<boolean>;
    /**
     * Re-use the given name, even if that name is already used. This is unsafe in production
     */
    replace?: pulumi.Input<boolean>;
    /**
     * Specification defining the Helm chart repository to use.
     */
    repositoryOpts?: pulumi.Input<inputs.RepositoryOptsArgs>;
    /**
     * When upgrading, reset the values to the ones built into the chart.
     */
    resetValues?: pulumi.Input<boolean>;
    /**
     * Names of resources created by the release grouped by "kind/version".
     */
    resourceNames?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * When upgrading, reuse the last release's values and merge in any overrides. If 'resetValues' is specified, this is ignored
     */
    reuseValues?: pulumi.Input<boolean>;
    /**
     * By default, the provider waits until all resources are in a ready state before marking the release as successful. Setting this to true will skip such await logic.
     */
    skipAwait?: pulumi.Input<boolean>;
    /**
     * If set, no CRDs will be installed. By default, CRDs are installed if not already present.
     */
    skipCrds?: pulumi.Input<boolean>;
    /**
     * Time in seconds to wait for any individual kubernetes operation.
     */
    timeout?: pulumi.Input<number>;
    /**
     * List of assets (raw yaml files). Content is read and merged with values. Not yet supported.
     */
    valueYamlFiles?: pulumi.Input<pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>[]>;
    /**
     * Custom values set for the release.
     */
    values?: pulumi.Input<{[key: string]: any}>;
    /**
     * Verify the package before installing it.
     */
    verify?: pulumi.Input<boolean>;
    /**
     * Specify the exact chart version to install. If this is not specified, the latest version is installed.
     */
    version?: pulumi.Input<string>;
    /**
     * Will wait until all Jobs have been completed before marking the release as successful. This is ignored if `skipAwait` is enabled.
     */
    waitForJobs?: pulumi.Input<boolean>;
}

/**
 * Specification defining the Helm chart repository to use.
 */
export interface RepositoryOptsArgs {
    /**
     * The Repository's CA File
     */
    caFile?: pulumi.Input<string>;
    /**
     * The repository's cert file
     */
    certFile?: pulumi.Input<string>;
    /**
     * The repository's cert key file
     */
    keyFile?: pulumi.Input<string>;
    /**
     * Password for HTTP basic authentication
     */
    password?: pulumi.Input<string>;
    /**
     * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
     */
    repo?: pulumi.Input<string>;
    /**
     * Username for HTTP basic authentication
     */
    username?: pulumi.Input<string>;
}
