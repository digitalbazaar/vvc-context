/*!
 * Copyright (c) 2025-2026 Digital Bazaar, Inc. All rights reserved.
 */
import v1rc1Context from './v1rc1.js';
import v1rc2Context from './v1rc2.js';
import v1rc3Context from './v1rc3.js';

// map of context id to context
export const contexts = new Map();
// map of context id to context metadata
export const metadata = new Map();
// map of short names to context metadata
export const named = new Map();

function setExportsFromMetadata({
  contextsMap, metadataMap, namedMap, metadata
}) {
  contextsMap.set(metadata.id, metadata.context);
  metadataMap.set(metadata.id, metadata);
  namedMap.set(metadata.shortName, metadata);
}

setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/vvc/v1rc1',
    type: 'ContextMetadata',
    shortName: 'v1rc1',
    fileUrl: new URL('../contexts/v1rc1.jsonld', import.meta.url),
    context: v1rc1Context
  }
});

setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/vvc/v1rc2',
    type: 'ContextMetadata',
    shortName: 'v1rc2',
    fileUrl: new URL('../contexts/v1rc2.jsonld', import.meta.url),
    context: v1rc2Context
  }
});

setExportsFromMetadata({
  contextsMap: contexts, metadataMap: metadata, namedMap: named,
  metadata: {
    id: 'https://w3id.org/vvc/v1rc3',
    type: 'ContextMetadata',
    shortName: 'v1rc3',
    fileUrl: new URL('../contexts/v1rc3.jsonld', import.meta.url),
    context: v1rc3Context
  }
});
