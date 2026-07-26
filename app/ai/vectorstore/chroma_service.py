import chromadb

from app.ai.embeddings.embedding_service import EmbeddingService


class ChromaService:

    def __init__(self):

        self.client = chromadb.PersistentClient(
            path="chromadb",
        )

        self.collection = self.client.get_or_create_collection(
            name="evaluate-yourself",
        )

        self.embedding_service = EmbeddingService()

    # Add Document
    def add_document(
        self,
        document_id: str,
        text: str,
        metadata: dict,
    ):

        embedding = self.embedding_service.generate_embedding(
            text,
        )

        self.collection.add(
            ids=[document_id],
            documents=[text],
            embeddings=[embedding],
            metadatas=[metadata],
        )

    # Search Documents
    def search(
        self,
        query: str,
        top_k: int = 5,
    ):

        query_embedding = self.embedding_service.generate_embedding(
            query,
        )

        results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k,
        )

        return results