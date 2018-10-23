// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { ApiItemKind } from './ApiItem';
import { ApiDeclaration } from './ApiDeclaration';

export class ApiPropertySignature extends ApiDeclaration {
  public static getCanonicalReference(name: string): string {
    return name;
  }

  /** @override */
  public get kind(): ApiItemKind {
    return ApiItemKind.PropertySignature;
  }

  /** @override */
  public get canonicalReference(): string {
    return ApiPropertySignature.getCanonicalReference(this.name);
  }
}