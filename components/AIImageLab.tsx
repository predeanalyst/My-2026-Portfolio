
import React, { useState, useRef } from 'react';
import { Sparkles, Upload, Send, RefreshCw, Download, Image as ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/gemini';

const AIImageLab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImage(base64);
        setHistory([base64]);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const editedImage = await editImageWithGemini(image, prompt);
      setImage(editedImage);
      setHistory(prev => [...prev, editedImage]);
      setPrompt('');
    } catch (err) {
      setError('Failed to process the image. Please try a different prompt or image.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setImage(newHistory[newHistory.length - 1]);
    }
  };

  const downloadImage = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = 'ai-edited-precious-iyekeoretin.png';
    link.click();
  };

  return (
    <section id="ai-lab" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4">
            <Sparkles size={16} />
            <span>AI Magic Studio</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Nano Banana Powered Editor</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience the future of image editing. Upload a professional headshot or a project visualization and use natural language to transform it using Gemini 2.5 Flash Image.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Preview Area */}
          <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-8 min-h-[400px] flex flex-col items-center justify-center relative group overflow-hidden">
            {image ? (
              <div className="w-full h-full flex flex-col items-center gap-4">
                <img 
                  src={image} 
                  alt="Editor preview" 
                  className="max-h-[500px] rounded-lg shadow-xl object-contain bg-white" 
                />
                <div className="flex gap-2">
                   <button 
                    onClick={downloadImage}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-slate-50 transition-colors text-slate-600"
                    title="Download result"
                  >
                    <Download size={20} />
                  </button>
                  <button 
                    onClick={handleUndo}
                    disabled={history.length <= 1}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50"
                    title="Undo last change"
                  >
                    <RefreshCw size={20} className={isLoading ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>
            ) : (
              <div 
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <Upload size={32} />
                </div>
                <p className="font-medium text-slate-900">Upload an image to start</p>
                <p className="text-sm text-slate-500 mt-2">Professional headshot or project graphic</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          {/* Controls Area */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                What should the AI do?
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'Add a retro cinematic filter', 'Remove the background', 'Make it look like a high-end corporate office setting'"
                className="w-full h-32 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none mb-4"
              />
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Add retro filter', 'Corporate office background', 'Change to black & white', '3D Avatar style'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setPrompt(suggestion)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <button
                onClick={handleEdit}
                disabled={isLoading || !image || !prompt.trim()}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200"
              >
                {isLoading ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    <span>Processing with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Generate Edit</span>
                  </>
                )}
              </button>

              {error && (
                <p className="mt-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">
                  {error}
                </p>
              )}
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl text-white">
              <h3 className="font-bold flex items-center gap-2 mb-3">
                <ImageIcon size={18} className="text-blue-400" />
                <span>How it works</span>
              </h3>
              <ul className="text-sm space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  <span>Powered by <strong>Gemini 2.5 Flash Image</strong> for high-fidelity edits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  <span>Uses natural language understanding to interpret complex artistic and structural requests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                  <span>Perfect for creating professional profile variants or dynamic project visualizations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImageLab;
