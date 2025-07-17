import { CodeBlock } from "@/components/code-block"

export function SAEImplementation() {
  return (
    <div className="flex flex-col gap-4 max-w-full">
      <div className="text-blue-950">
        We implemented sparse autoencoders (SAEs) to extract interpretable features from the model&apos;s residual
        stream. The SAE is trained to minimize reconstruction error while encouraging sparsity, with each latent
        dimension capturing a distinct and human-understandable aspect of the residual stream.
      </div>

      <CodeBlock
        code={`# Example SAE implementation
class SparseAutoencoder(nn.Module):
    def __init__(self, input_dim, hidden_dim):
        super().__init__()
        self.encoder = nn.Linear(input_dim, hidden_dim)
        self.decoder = nn.Linear(hidden_dim, input_dim)

    def forward(self, x):
        latents = self.encoder(x)
        reconstructed = self.decoder(latents)
        return latents, reconstructed`}
        language="python"
      />
    </div>
  )
}
