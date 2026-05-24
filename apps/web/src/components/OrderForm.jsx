import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { useCart } from '../contexts/CartContext';

export default function OrderForm() {
  const navigate = useNavigate();
  const { cartItems, getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    customer_address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.customer_name || !formData.customer_email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        ...formData,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total_price: getTotal(),
        order_status: 'Pending',
      };

      const record = await pocketbaseClient.collection('orders').create(orderData, { $autoCancel: false });
      
      toast.success('Order placed successfully');
      clearCart();
      navigate(`/order-confirmation/${record.id}`, { state: { order: record } });
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="customer_name" className="text-muted">Full Name *</Label>
        <Input
          id="customer_name"
          name="customer_name"
          type="text"
          value={formData.customer_name}
          onChange={handleChange}
          required
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="customer_email" className="text-muted">Email *</Label>
        <Input
          id="customer_email"
          name="customer_email"
          type="email"
          value={formData.customer_email}
          onChange={handleChange}
          required
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="customer_phone" className="text-muted">Phone</Label>
        <Input
          id="customer_phone"
          name="customer_phone"
          type="tel"
          value={formData.customer_phone}
          onChange={handleChange}
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="customer_address" className="text-muted">Delivery Address</Label>
        <Textarea
          id="customer_address"
          name="customer_address"
          value={formData.customer_address}
          onChange={handleChange}
          rows={3}
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div className="bg-background/50 border border-secondary/30 rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-secondary uppercase tracking-wider">Order Summary</h3>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-white/80">
              <span>{item.name} × {item.quantity}</span>
              <span className="text-secondary">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-secondary/30 pt-2 mt-2 flex justify-between font-bold">
            <span className="text-white">Total</span>
            <span className="text-primary text-glow-blue">${getTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white border border-secondary hover:bg-secondary hover:text-background font-bold uppercase tracking-wider transition-all duration-300 hover:glow-blue"
        disabled={isSubmitting || cartItems.length === 0}
      >
        {isSubmitting ? 'Processing...' : 'Initialize Checkout'}
      </Button>
    </form>
  );
}