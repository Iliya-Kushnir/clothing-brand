"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllOrders, updateOrderStatus } from "@/server/AdminActions"; 
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Scissors, Ruler, Sparkles, LogOut, 
  TrendingUp, Clock, CheckCircle2, AlertCircle, Banknote 
} from "lucide-react";
import { logoutUser } from "@/server/authActions";
import { useRouter } from "next/navigation";

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area, Cell, PieChart, Pie 
} from 'recharts';

export default function AtelierPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: getAllOrders,
  });

  const statusMutation = useMutation({
    mutationFn: ({ id, status, price }: { id: string; status?: string; price?: string | number }) => 
      updateOrderStatus(id, { status, price }), 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
    },
  });

  const handleLogout = async () => {
    await logoutUser();
    router.push("/login");
    router.refresh();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FDFBF7] text-stone-600 uppercase tracking-widest animate-pulse font-serif">
        Загрузка базы данных...
      </div>
    );
  }

  const stats = {
    new: orders?.filter((o: any) => o.status === 'new').length || 0,
    inProgress: orders?.filter((o: any) => o.status === 'in_progress').length || 0,
    ready: orders?.filter((o: any) => o.status === 'ready').length || 0,
    revenue: orders?.reduce((acc: number, o: any) => acc + (Number(o.price) || 0), 0) || 0,
  };

  const chartData = orders?.slice(0, 7).map((o: any) => ({
    name: new Date(o.created_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
    income: Number(o.price) || 0,
  })).reverse();

  const pieData = [
    { name: 'Новые', value: stats.new, color: '#d97706' },
    { name: 'В работе', value: stats.inProgress, color: '#2563eb' },
    { name: 'Готовы', value: stats.ready, color: '#059669' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-amber-100 text-amber-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-emerald-100 text-emerald-800';
      case 'completed': return 'bg-stone-200 text-stone-700';
      default: return 'bg-stone-100 text-stone-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8 text-stone-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Шапка админки */}
        <div className="flex justify-between items-end border-b border-stone-200 pb-6">
          <div>
            <h1 className="text-4xl font-serif tracking-tight">
              Atelier <span className="text-amber-700">Management</span>
            </h1>
            <p className="text-stone-500 text-xs italic mt-1 flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Management Dashboard
            </p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline" 
            className="border-stone-200 hover:bg-stone-100 text-xs font-bold uppercase transition-all px-6"
          >
            <LogOut size={14} className="mr-2" /> Выйти
          </Button>
        </div>

        {/* --- ВИДЖЕТЫ СТАТИСТИКИ --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Новые заявки" value={stats.new} icon={<Sparkles className="text-amber-600" size={20} />} />
          <StatCard title="В работе" value={stats.inProgress} icon={<Scissors className="text-blue-600" size={20} />} />
          <StatCard title="Ожидают примерки" value={stats.ready} icon={<Ruler className="text-emerald-600" size={20} />} />
          <StatCard title="Общая выручка" value={`${stats.revenue} ₴`} icon={<Banknote className="text-stone-700" size={20} />} isHighlight />
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="bg-stone-200/60 border border-stone-300 mb-6 p-1">
            <TabsTrigger value="orders" className="data-[state=active]:bg-white data-[state=active]:shadow-sm uppercase text-[11px] font-bold px-6 text-stone-700">Список заказов</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm uppercase text-[11px] font-bold px-6 text-stone-700">Аналитика</TabsTrigger>
          </TabsList>

          {/* ВКЛАДКА: ТАБЛИЦА ЗАКАЗОВ */}
          <TabsContent value="orders" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-stone-50">
                  <TableRow className="hover:bg-transparent border-stone-200">
                    <TableHead className="w-[120px] text-[10px] uppercase font-bold text-stone-500">Дата</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold text-stone-500">Стоимость</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold text-stone-500">Клиент</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold text-stone-500">Изделие</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold text-stone-500 text-center">Статус</TableHead>
                    <TableHead className="text-right text-[10px] uppercase font-bold text-stone-500">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders?.map((order: any) => (
                    <TableRow key={order.id} className="border-stone-200 hover:bg-stone-50/60 transition-colors">
                      <TableCell className="p-4 text-xs text-stone-500 font-mono">
                        {new Date(order.created_at).toLocaleDateString('ru-RU')}
                      </TableCell>
                      <TableCell className="p-4 font-mono text-xs text-amber-700 font-bold">
                        <div className="flex items-center gap-1">
                          <input 
                            type="number"
                            defaultValue={order.price || 0}
                            onBlur={(e) => {
                              const newPrice = e.target.value;
                              statusMutation.mutate({ id: order.id, price: newPrice }); 
                            }}
                            className="bg-transparent border-b border-transparent hover:border-stone-300 focus:border-amber-700 focus:outline-none w-16 transition-all"
                          />
                          <span>₴</span>
                        </div>
                      </TableCell>
                      <TableCell className="p-4 font-bold text-stone-800">
                        <div className="flex flex-col">
                          {order.client_name}
                          <span className="text-[10px] font-normal text-amber-700/80">{order.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell className="p-4 text-sm text-stone-600 font-serif">{order.watch_model || order.item}</TableCell>
                      <TableCell className="p-4 text-center">
                        <Badge className={`${getStatusColor(order.status)} text-[9px] px-2 py-0.5 uppercase border-none font-medium`}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Select 
                            key={`${order.id}-${order.status}`}
                            onValueChange={(value) => statusMutation.mutate({ id: order.id, status: value })}
                            defaultValue={order.status}
                          >
                            <SelectTrigger className="w-[150px] h-8 bg-stone-50 border-stone-200 text-[10px] uppercase font-bold">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-stone-200 text-stone-800 font-sans uppercase text-[10px]">
                              <SelectItem value="new">Новый заказ</SelectItem>
                              <SelectItem value="in_progress">В работе</SelectItem>
                              <SelectItem value="ready">Готово к примерке</SelectItem>
                              <SelectItem value="completed">Выдан</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* ВКЛАДКА: АНАЛИТИКА (ГРАФИКИ) */}
          <TabsContent value="analytics" className="animate-in zoom-in-95 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Большой график доходов */}
              <div className="lg:col-span-2 bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Динамика выручки</h3>
                  <TrendingUp className="text-emerald-600" size={20} />
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#d97706" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
                      <XAxis dataKey="name" stroke="#78716c" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#78716c" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}₴`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e7e5e4', fontSize: '10px', borderRadius: '8px' }}
                        itemStyle={{ color: '#b45309' }}
                      />
                      <Area type="monotone" dataKey="income" stroke="#d97706" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Круговая диаграмма статусов */}
              <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-8">Заказы по статусам</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e7e5e4', fontSize: '10px', borderRadius: '8px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-[10px] uppercase font-bold">
                      <span className="flex items-center gap-2 text-stone-600">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.name}
                      </span>
                      <span className="text-stone-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, isHighlight = false }: any) {
  return (
    <div className={`p-6 rounded-xl border transition-all hover:scale-[1.02] duration-300 shadow-sm ${
      isHighlight ? 'bg-amber-700 border-amber-600 text-white' : 'bg-white border-stone-200'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${isHighlight ? 'text-amber-100' : 'text-stone-400'}`}>
          {title}
        </span>
        <div className={`p-2 rounded-lg ${isHighlight ? 'bg-amber-600 text-white' : 'bg-stone-100'}`}>
          {icon}
        </div>
      </div>
      <div className={`text-3xl font-serif tracking-tight ${isHighlight ? 'text-white' : 'text-stone-800'}`}>
        {value}
      </div>
    </div>
  );
}