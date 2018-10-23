// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { ApiItemKind } from './ApiItem';
import { ApiItemContainerMixin } from '../mixins/ApiItemContainerMixin';
import { ApiDeclaration } from './ApiDeclaration';

export class ApiNamespace extends ApiItemContainerMixin(ApiDeclaration) {
  public static getCanonicalReference(name: string): string {
    return `(${name}:namespace)`;
  }
    /** @override */
  public get kind(): ApiItemKind {
    return ApiItemKind.Namespace;
  }

  /** @override */
  public get canonicalReference(): string {
    return ApiNamespace.getCanonicalReference(this.name);
  }
}